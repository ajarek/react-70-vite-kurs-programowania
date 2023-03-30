import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import './Form.css'

export const Form = ({ onSubmit, labelSubmit }) => {
  const schema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    nr: yup.number().min(1).max(20).required(),
  })

  const {
    register,
    handleSubmit,
    reset,
    formState,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })
  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({
        name: '',
        email: '',
        nr: '',
      })
    }
  }, [formState, reset])
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={'form'}
    >
      <input
        type='text'
        placeholder='Imię i Nazwisko ...'
        {...register('name')}
      />
      <p>{errors.name?.message}</p>

      <input
        type='text'
        placeholder='Email...'
        {...register('email')}
      />
      <p>{errors.email?.message}</p>

      <input
        type='number'
        placeholder='Nr kursu...'
        {...register('nr')}
      />
      <p>{errors.nr?.message}</p>

      <input
        type='submit'
        value={labelSubmit}
      />
    </form>
  )
}
export default Form
