import Image from 'next/image';
import Link from '@/components/Link/Link';
import Input from '@/components/Input/Input';
import RadioGroup from '@/components/RadioGroup/RadioGroup';
import { Controller, useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { Field, Label } from '@headlessui/react';

type Inputs = {
  name: string;
  phone?: string;
  email: string;
  message: string;
};

export default function Page() {
  const { control, handleSubmit, reset } = useForm<Inputs>({
    defaultValues: {
      name: '',
      phone: '',
      email: '',
      message: '',
    },
  });
  const formReasons: string[] = ['General Enquiry', 'New Project', 'Previous Project'];
  const [formReason, setFormReason] = useState<string>(formReasons[0]);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    // Reset form
    reset();
  }, [reset, submitted]);

  return (
    <div className="bg-primary-500 bg-[url(/images/pattern.webp)] bg-cover text-white desktop:relative">
      <div className="container px-4 py-36">
        {submitted ? (
          <div className="mb-24 space-y-8">
            <div className="flex items-center gap-x-4">
              <Image
                src="/images/arrow.svg"
                alt="\"
                width={0}
                height={0}
                sizes="100vw"
                className="w-[42px] h-[32px] desktop:w-[87px] desktop:h-[67px]"
              />
              <h1 className="font-bold text-5xl desktop:text-8xl">Thank you!</h1>
            </div>
            <p className="font-bold text-xl">Your enquiry has been received and we’ll be in touch with you soon.</p>
          </div>
        ) : (
          <>
            <div className="space-y-4 desktop:flex items-end justify-between mb-24">
              <div className="space-y-8">
                <div className="flex items-center gap-x-4">
                  <Image
                    src="/images/arrow.svg"
                    alt="\"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-[42px] h-[32px] desktop:w-[87px] desktop:h-[67px]"
                  />
                  <h1 className="font-bold text-5xl desktop:text-8xl">Get in touch</h1>
                </div>
                <p className="font-bold text-xl">
                  <Link href="mailto:info@rostro.com">info@rostro.com</Link>
                </p>
              </div>
              <div>
                <p className="font-light text-xl text-neutral-400">
                  Let’s work together!
                  <br />
                  Drop us a line to see how we can help.
                </p>
              </div>
            </div>
            <div className="max-w-[1000px] desktop:mb-28">
              <form
                onSubmit={handleSubmit(async ({ name, phone, email, message }) => {
                  setLoading(true);
                  if ([name, email, formReason, message].some((item) => typeof item === 'undefined')) {
                    return alert('Please fill out all mandatory fields!');
                  }
                  try {
                    const response = await fetch(`https://api.airtable.com/v0/appX77crZfycn7Su8/Entries`, {
                      method: 'post',
                      headers: {
                        authorization: `Bearer ${process.env.AIRTABLE_PAT}`,
                        'content-type': 'application/json',
                      },
                      body: JSON.stringify({
                        records: [
                          {
                            fields: {
                              Name: name,
                              Phone: phone ?? '',
                              Email: email,
                              Reason: formReason,
                              Message: message,
                              Location: window.location.href,
                            },
                          },
                        ],
                      }),
                    });
                    if (response.ok) {
                      setSubmitted(true);
                    }
                  } catch (err) {
                    console.error(err);
                    alert('Something went wrong, please try again later.');
                  } finally {
                    setLoading(false);
                  }
                })}
                className="space-y-10 desktop:space-y-20"
              >
                <Controller
                  name="name"
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange } }) => (
                    <Field>
                      <Label>
                        Name <span className="text-red-300">*</span>
                      </Label>
                      <Input required {...{ value, onChange }} />
                    </Field>
                  )}
                />
                <div className="flex flex-col desktop:flex-row gap-x-6 gap-y-10 desktop:gap-y-20">
                  <Controller
                    name="phone"
                    control={control}
                    render={({ field: { value, onChange } }) => (
                      <Field className="w-full">
                        <Label>Phone</Label>
                        <Input type="tel" {...{ value, onChange }} />
                      </Field>
                    )}
                  />
                  <Controller
                    name="email"
                    control={control}
                    rules={{ required: true }}
                    render={({ field: { value, onChange } }) => (
                      <Field className="w-full">
                        <Label>
                          Email <span className="text-red-300">*</span>
                        </Label>
                        <Input type="email" required {...{ value, onChange }} />
                      </Field>
                    )}
                  />
                </div>
                <div className="space-y-8">
                  <p className="font-light text-xl text-neutral-400">
                    Reason for enquiry <span className="text-red-300">*</span>
                  </p>
                  <RadioGroup name="reason" options={formReasons} onChange={setFormReason} />
                </div>
                <Controller
                  name="message"
                  control={control}
                  render={({ field: { value, onChange } }) => (
                    <Field>
                      <Label>
                        Message <span className="text-red-300">*</span>
                      </Label>
                      <Input type="textarea" rows="4" required {...{ value, onChange }} />
                    </Field>
                  )}
                />
                <div>
                  <button
                    type="submit"
                    className="min-w-[260px] px-14 pb-5 pt-4 bg-blue-2 font-bold mt-24 text-xl mb-10"
                  >
                    {loading ? (
                      <div className="mx-auto w-8 h-8 border border-white border-t-transparent rounded-full animate-spin"></div>
                    ) : (
                      <span>Send Enquiry</span>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </>
        )}
      </div>
      <div className="mt-24 desktop:absolute inset-0 w-screen flex justify-center items-end pointer-events-none overflow-x-hidden z-0">
        <p
          className="font-bold text-blue-1 whitespace-nowrap align-baseline bg-gradient-to-t from-blue-2/75 to-transparent"
          style={{ fontSize: '15.5vw', lineHeight: '0.7' }}
        >
          #StepForward
        </p>
      </div>
    </div>
  );
}
