'use client';

import axios from 'axios';
import { AiFillGithub } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import { useCallback, useState } from 'react';
import { toast } from 'react-hot-toast';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { signIn } from 'next-auth/react';
import Heading from '../Heading';
import Button from '../Button';
import useRegisterModel from '@/app/Hooks/useRegisterModel';
import useLoginModel from '@/app/Hooks/useLoginModel';
import Modal from './modal';
import Input from '../Inputs/Input';
import { useRouter } from 'next/navigation';

const LoginModal = () => {
  const registerModal = useRegisterModel();
  const loginModal = useLoginModel();
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    setIsLoading(true);

    signIn('credentials', {
      ...data,
      redirect: false,
    }).then((callback) => {
      setIsLoading(false);
      if (callback?.ok) {
        toast.success('Logged in');
        router.refresh();
        loginModal.onClose();
      }

      if (callback?.error) {
        toast.error(callback.error);
      }
    });
  };

  const bodyContent = (
    <div className='flex flex-col gap-4'>
      <Heading
        title='Welcome back to easyStay'
        subtitle='Login to your account'
      />
      <Input
        id='email'
        label='Email'
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id='password'
        label='Password'
        type='password'
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
    </div>
  );

  const footerContent = (
    <div className='flex flex-col gap-4 mt-3'>
      <hr />
      <div className='flex flex-row gap-4'>
        <Button
          outline
          label='Continue with Google'
          icon={FcGoogle}
          onClick={() => {}}
        />
        <Button
          outline
          label='Continue with Github'
          icon={AiFillGithub}
          onClick={() => {}}
        />
      </div>
      <div
        className='
          text-neutral-500 
          text-center 
          mt-4 
          font-light
        '
      >
        <p>
          Don't have an account?
          <span
            onClick={() => {}}
            className='
              text-red-700
              cursor-pointer 
              hover:underline
              text-lg
              font-semibold
            '
          >
            {' '}
            Register
          </span>
        </p>
      </div>
    </div>
  );

  return (
    <Modal
      disabled={isLoading}
      isOpen={loginModal.isOpen}
      title='Login'
      actionLabel='Continue'
      onClose={loginModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={footerContent}
    />
  );
};

export default LoginModal;
