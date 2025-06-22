"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectItem,
  SelectContent,
} from "@/components/ui/select";
import Link from "next/link";

export default function SectionFive() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-16 font-inter text-black">
      <h2 className="text-3xl md:text-4xl heading-xl uppercase mb-12 text-center">
        Request a Quote
      </h2>

      <form className="space-y-8">
        {/* Row 1: Name & Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="Enter your name" />
          </div>
          <div>
            <Label htmlFor="email">E-mail</Label>
            <Input id="email" type="email" placeholder="Enter your email" />
          </div>
        </div>

        {/* Row 2: Phone & Time Frame */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Label htmlFor="phone">Phone Number</Label>
            <Input id="phone" placeholder="Enter your number" />
          </div>
          <div>
            <Label
              htmlFor="time"
              className="after:content-['*'] after:text-red-600">
              Time Frame
            </Label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Choose Time Frame" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1week">1 Week</SelectItem>
                <SelectItem value="1month">1 Month</SelectItem>
                <SelectItem value="flexible">Flexible</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Row 3: Size & Quantity */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Label
              htmlFor="size"
              className="after:content-['*'] after:text-red-600">
              Size
            </Label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Choose Size" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="small">Small</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="large">Large</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label
              htmlFor="quantity"
              className="after:content-['*'] after:text-red-600">
              Quantity
            </Label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Choose Quantity" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1-10">1 - 10</SelectItem>
                <SelectItem value="11-50">11 - 50</SelectItem>
                <SelectItem value="51+">51+</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Description */}
        <div>
          <Label
            htmlFor="project"
            className="after:content-['*'] after:text-red-600">
            Please Describe Your Project
          </Label>
          <Textarea id="project" placeholder="Choose a project type" rows={5} />
        </div>

        {/* Terms and Button */}
        <div className="text-center text-sm text-muted-foreground mt-4">
          By submitting this form you agree to our{" "}
          <Link href="#" className="underline">
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link href="#" className="underline">
            Privacy Policy
          </Link>
          .
        </div>

        <div className="flex justify-center">
          <Button className="mt-6 px-8 py-3 text-white bg-[#0546D2] hover:bg-[#1959AC] text-base font-semibold rounded-lg shadow-md">
            Lorem Ipsum →
          </Button>
        </div>
      </form>
    </section>
  );
}
