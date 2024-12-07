"use client";
import Link from "next/link";
import Image from "next/image";

export const Logo = () => {
  return (
    <Link href="/">
      <div className="flex items-center gap-x-2 hover:opacity-90 transition">
        <div className="relative w-[45px] h-[45px]">
          <Image
            src="/nl-logo.svg"
            alt="Nexus"
            fill
            sizes="45px"
            className="object-contain"
            priority
          />
        </div>
      </div>
    </Link>
  );
};
