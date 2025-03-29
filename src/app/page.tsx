"use client";
import { useRouter } from "next/router";
import Image from "next/image";
import { useEffect } from "react";
import { redirect } from "next/navigation";

export default function Home() {
  redirect("/your-report/test1");
}
