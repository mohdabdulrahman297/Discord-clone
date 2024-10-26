import { Button } from "@/components/ui/button";
import { Ghost } from "lucide-react";


export default function Home() {
  return (
    <div className="text-3xl font-bold tect-indigo-500">
      First code of this day
      <Button variant="ghost">
        click me
      </Button>
    </div>
  );
}
