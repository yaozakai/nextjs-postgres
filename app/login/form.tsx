'use client';

import { poppinsRegular } from '../ui/fonts';
import {
  AtSymbolIcon,
  KeyIcon,
  ExclamationCircleIcon,
} from '@heroicons/react/24/outline';
import { ArrowRightIcon } from '@heroicons/react/20/solid';
import { Button } from '../ui/button';
import { useFormState, useFormStatus } from 'react-dom';
import { authenticate } from '@/app/lib/actions';
import Image from 'next/image'

import { signIn } from "next-auth/react"; // Import the signIn function from NextAuth for authentication.
import { useSearchParams, useRouter } from "next/navigation"; // Import Next.js navigation utilities.

import DiscordLogo from "../../public/icons/discord.png";
import FacebookLogo from "../../public/icons/facebook.png";
import GithubLogo from "../../public/icons/github.png";
import TwitterLogo from "../../public/icons/twitter.png";
import GoogleLogo from "../../public/icons/google.png";



export default function LoginForm() {
  const [errorMessage, dispatch] = useFormState(authenticate, undefined);
  const searchParams = useSearchParams(); // Get query parameters from the URL.
  const callbackUrl = searchParams.get("callbackUrl") || "/profile"; // Define a callback URL or use a default one.

  return (
    <form action={dispatch} className="space-y-3">
      <div className="flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8">

        <div className="w-full">
          <div>
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="email"
            >
              Email
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email address"
                required
              />
              <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
          <div className="mt-4">
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="password"
            >
              Password
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="password"
                type="password"
                name="password"
                placeholder="Enter password"
                required
                minLength={6}
              />
              <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
        </div>

        <div
          className="flex h-8 items-end space-x-1"
          aria-live="polite"
          aria-atomic="true"
        >
        {errorMessage && (
          <>
            <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
            <p className="text-sm text-red-500">{errorMessage}</p>
          </>
        )}
        </div>

        <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
          <p className="text-center mx-4 mb-0">or</p>
        </div>
        <div className="grid grid-cols-4 gap-4">
          {/* Sign In with Google button */}
          <div>
            <a
              className="w-full flex justify-center items-center mb-3"
              onClick={() => signIn("google", { callbackUrl })}
              role="button"
            >
            <Image
              className="w-9"
              src={GoogleLogo}
              alt=""

            />
            </a>
          </div>
          {/* Sign In with GitHub button */}
          <div>
            <a
              className="w-full flex justify-center items-center mb-3"
              onClick={() => signIn("github", { callbackUrl })}
              role="button"
            >
            <Image
              className="w-9"
              src={GithubLogo}
              alt=""
              style={{ height: "2rem" }}
            />
            </a>
          </div>
          {/* Sign In with Facebook button */}
          <div>
            <a
              className="w-full flex justify-center items-center mb-3"
              onClick={() => signIn("facebook", { callbackUrl })}
              role="button"
            >
            <Image
              className="w-9"
              src={FacebookLogo}
              alt=""
              style={{ height: "2rem" }}
            />
            </a>
          </div>
          {/* Sign In with Twitter button */}
          <div>
            <a
              className="w-full flex justify-center items-center mb-3"
              onClick={() => signIn("twitter", { callbackUrl })}
              role="button"
            >
            <Image
              className="w-7"
              src={TwitterLogo}
              alt=""
              style={{ height: "1.8rem" }}
            />
            </a>
          </div>
        </div>
      </div>
    </form>
  );
}

function LoginButton() {
  const { pending } = useFormStatus();

  return (
    <Button className="mt-4 w-full" aria-disabled={pending}>
    Log in <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" />
  </Button>
  );
}
