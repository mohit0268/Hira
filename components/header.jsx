import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { PenBox } from "lucide-react";
import UserMenu from "./userMenu";


const Header = () => {
  return (
    <>
      <header className="container mx-auto">
        <nav className="py-2 px-8 flex justify-between items-center">
          <Link href="/">
            <Image
              src={"/hira-logo.png"}
              alt="Hira Logo"
              width={50}
              height={50}
              className="h-auto w-auto object-contain"
            />
          </Link>
          
          <div className="flex items-center gap-2">
            <Link href={"/projects/create"} className="px-2">
            <Button className="bg-blue-500 flex items-center gap-2">
              <PenBox size={16} />
              <span>Create Project</span>
            </Button>
          </Link>

            <SignedOut>
              <SignInButton forceRedirectUrl="/onboarding">
                <Button variant="outline">Login</Button>
              </SignInButton>
            </SignedOut>

            <SignedIn>
              <UserMenu/>
            </SignedIn>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
