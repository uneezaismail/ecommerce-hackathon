
'use client'
import * as Clerk from '@clerk/elements/common'
import * as SignIn from '@clerk/elements/sign-in'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export default function SignInPageone() {
  return (
    <div className='w-full max-w-lg mx-auto lg:max-w-xl xl:max-w-2xl px-4 py-16 lg:px-16 lg:py-20 space-y-9 '>
      <SignIn.Root>
        <Clerk.Loading>
          {isGlobalLoading => (
            <>
              <SignIn.Step name='start'>
                <Card  className="flex flex-col space-y-3 max-w-[450px] shadow-none border-none">
                  <CardHeader>
                    <CardTitle className="text-3xl sm:text-4xl font-bold text-custom-green text-center">Sign in</CardTitle>
                  </CardHeader>
                  <CardContent className='grid gap-y-4'>
                    <Clerk.Field name='identifier' className='space-y-2'>
                      <Clerk.Label asChild>
                        <Label className="text-base sm:text-lg font-medium">Email address</Label>
                      </Clerk.Label>
                      <Clerk.Input type='email' required asChild>
                        <Input placeholder='user@gmail.com' className="placeholder:text-gray-500 border focus:ring-0 focus:outline-none border-black rounded w-full h-[40px] sm:h-[50px] lg:h-[60px] px-3"/>
                      </Clerk.Input>
                      <Clerk.FieldError className='block text-sm text-destructive text-red-500' />
                    </Clerk.Field>

                    <Clerk.Field name='password' className='space-y-2'>
                      <Clerk.Label asChild>
                        <Label className="text-base sm:text-lg font-medium">Password</Label>
                      </Clerk.Label>
                      <Clerk.Input type='password' required asChild>
                        <Input placeholder='X7f!2vB#9wQ$' className="placeholder:text-gray-500 border focus:ring-0 focus:outline-none border-black rounded w-full h-[40px] sm:h-[50px] lg:h-[60px] px-3"/>
                      </Clerk.Input>
                      <Clerk.FieldError className='block text-sm text-destructive text-red-500' />
                    </Clerk.Field>
                  </CardContent>
                  <CardFooter>
                    <div className='grid w-full gap-y-4'>
                      <SignIn.Action submit asChild>
                        <Button disabled={isGlobalLoading} className="border border-black rounded text-white bg-custom-green hover:bg-emerald-950 text-lg sm:text-xl py-4 sm:py-6 px-8 sm:px-10 lg:px-14 w-full md:w-auto">
                          <Clerk.Loading>
                            {isLoading => {
                              return isLoading ? (
                               <></>
                              ) : (
                                'Continue'
                              )
                            }}
                          </Clerk.Loading>
                        </Button>
                      </SignIn.Action>

                      <Button variant='link' size='sm' asChild>
                        <Link href='/sign-up'>
                          Don&apos;t have an account? Sign up
                        </Link>
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              </SignIn.Step>

            </>
          )}
        </Clerk.Loading>
      </SignIn.Root>
    </div>
  )
}








