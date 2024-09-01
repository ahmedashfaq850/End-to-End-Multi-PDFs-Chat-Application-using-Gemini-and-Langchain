import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function LoginForm() {
  return (
    <Card className="w-full max-w-sm pt-8">
      <CardHeader>
        <div className="flex gap-3 items-center">
          <Image src="/images/avatar.svg" alt="logo" width={35} height={35} />
          <div>
            <h1>Andy Sietsema</h1>
            <p className="text-textGray text-[11px] font-light">
              Account Manager
            </p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid gap-2">
          <Label className="font-normal" htmlFor="email">
            Email
          </Label>
          <Input id="email" type="email" placeholder="Type Email" required />
        </div>
      </CardContent>
      <CardFooter className="flex flex-col items-start">
        <Button className=" bg-bgDarkBlue">View workspace</Button>
        <div className="mt-5 flex items-center gap-1">
          <Image src="/icons/lockIcon.svg" alt="logo" width={10} height={10} />
          <p className="text-textGray font-normal text-[13px]">
            This information will only be shared with &e
          </p>
        </div>
      </CardFooter>
    </Card>
  );
}
