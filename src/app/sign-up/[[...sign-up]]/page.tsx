'use client'

import * as Clerk from '@clerk/elements/common'
import * as SignUp from '@clerk/elements/sign-up'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export default function SignUpPage() {
  return (
    <div className="w-full max-w-lg mx-auto lg:max-w-xl xl:max-w-2xl px-4 py-16 lg:px-16 lg:py-20 space-y-9">
      <SignUp.Root >
        <Clerk.Loading>
          {isGlobalLoading => (
            <>
              <SignUp.Step name="start">
                <Card className="flex flex-col space-y-3 max-w-[450px] shadow-none border-none">
                  <CardHeader>
                    <CardTitle className='text-3xl sm:text-4xl font-bold text-custom-green text-center'> Register</CardTitle>
                  </CardHeader>
                  <CardContent className="grid gap-y-4">
                    <Clerk.Field name="emailAddress">
                      <Clerk.Label asChild>
                        <Label className="text-base sm:text-lg font-medium">Email address</Label>
                      </Clerk.Label>
                      <Clerk.Input asChild>
                        <Input placeholder='user@gmail.com' className="placeholder:text-gray-500 border focus:ring-0 focus:outline-none border-black rounded w-full h-[40px] sm:h-[50px] lg:h-[60px] px-3"/>
                      </Clerk.Input>
                      <Clerk.FieldError className="block text-sm text-destructive text-red-500" />
                    </Clerk.Field>

                    <Clerk.Field name="password">
                      <Clerk.Label asChild>
                        <Label className="text-base sm:text-lg font-medium">Password</Label>
                      </Clerk.Label>
                      <Clerk.Input type="password" asChild>
                        <Input placeholder='X7f!2vB#9wQ$' className="placeholder:text-gray-500 border focus:ring-0 focus:outline-none border-black rounded w-full h-[40px] sm:h-[50px] lg:h-[60px] px-3"/>
                      </Clerk.Input>
                      <Clerk.FieldError className="block text-sm text-destructive text-red-500" />
                    </Clerk.Field>
                    <div id="clerk-captcha" className="mt-2"></div>
                    <p className="text-sm sm:text-base">
                Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our{' '}
                <span className="font-semibold">privacy policy</span>.
              </p>
                  </CardContent>
                  <CardFooter>
                    <div className="grid w-full gap-y-4">
                      <SignUp.Action submit asChild>
                        <Button disabled={isGlobalLoading}  className="border border-black rounded text-white bg-custom-green hover:bg-emerald-950 text-lg sm:text-xl py-2 sm:py-6 px-8 sm:px-10 lg:px-14 w-full md:w-auto">Register</Button>
                      </SignUp.Action>
                    </div>
                  </CardFooter>
                </Card>
              </SignUp.Step>

              <SignUp.Step name="continue">
                <Card className="w-full sm:w-96">
                  <CardHeader>
                    <CardTitle>Complete Your Account</CardTitle>
                    <CardDescription>Fill in missing details.</CardDescription>
                  </CardHeader>
                  <CardContent className="grid gap-y-4">
                    <Clerk.Field name="username">
                      <Clerk.Label asChild>
                        <Label>Username</Label>
                      </Clerk.Label>
                      <Clerk.Input asChild>
                        <Input />
                      </Clerk.Input>
                      <Clerk.FieldError className="block text-sm text-destructive" />
                    </Clerk.Field>
                  </CardContent>
                  <CardFooter>
                    <div className="grid w-full gap-y-4">
                      <SignUp.Action submit asChild>
                        <Button disabled={isGlobalLoading}>Continue</Button>
                      </SignUp.Action>
                    </div>
                  </CardFooter>
                </Card>
              </SignUp.Step>

              <SignUp.Step name="verifications">
                <SignUp.Strategy name="phone_code">
                  <Card className="w-full sm:w-96">
                    <CardHeader>
                      <CardTitle>Check your phone for an SMS</CardTitle>
                    </CardHeader>
                    <CardContent className="grid gap-y-4">
                      <Clerk.Field name="code">
                        <Clerk.Label asChild>
                          <Label>Phone Code</Label>
                        </Clerk.Label>
                        <Clerk.Input asChild>
                          <Input />
                        </Clerk.Input>
                        <Clerk.FieldError className="block text-sm text-destructive" />
                      </Clerk.Field>
                    </CardContent>
                    <CardFooter>
                      <div className="grid w-full gap-y-4">
                        <SignUp.Action submit asChild>
                          <Button disabled={isGlobalLoading}>Verify</Button>
                        </SignUp.Action>
                      </div>
                    </CardFooter>
                  </Card>
                </SignUp.Strategy>

                <SignUp.Strategy name="email_code">
                  <Card className="flex flex-col space-y-6 max-w-[450px] shadow-none border-none">
                    <CardHeader>
                      <CardTitle className='text-3xl font-bold text-custom-green text-center'>Check your email</CardTitle>
                    </CardHeader>
                    <CardContent className="grid gap-y-4">
                      <Clerk.Field name="code">
                        <Clerk.Label asChild>
                          <Label className="text-base sm:text-xl font-medium">Email Code</Label>
                        </Clerk.Label>
                        <Clerk.Input asChild>
                          <Input className="placeholder:text-gray-500 border focus:ring-0 focus:outline-none border-black rounded w-full h-[40px] sm:h-[50px] lg:h-[60px] px-3" />
                        </Clerk.Input>
                        <Clerk.FieldError className="block text-sm text-destructive text-red-500" />
                      </Clerk.Field>
                    </CardContent>
                    <CardFooter>
                      <div className="grid w-full gap-y-4">
                        <SignUp.Action submit asChild>
                          <Button disabled={isGlobalLoading} className="border border-black rounded text-white bg-custom-green hover:bg-emerald-950 text-lg sm:text-xl py-2 sm:py-6 px-8 sm:px-10 lg:px-14 w-full md:w-auto">Verify</Button>
                        </SignUp.Action>
                      </div>
                    </CardFooter>
                  </Card>
                </SignUp.Strategy>
              </SignUp.Step>
            </>
          )}
        </Clerk.Loading>
      </SignUp.Root>
    </div>
  )
}
