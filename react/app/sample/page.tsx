import { ComponentExample } from "@/components/component-example";
import { CardImage } from "./card";
import { AccordionBasic } from "./accordion";

export default function Page() {
    return <>

        <div className="mt-5 flex-col items-center gap-5">
            <CardImage />
            <AccordionBasic />
       </div>

    </>
}