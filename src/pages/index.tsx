import { zodResolver } from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";
import {checkMessageFormData, DataFromMessageForm} from "@/zod-schemas/messageValidation";
import {publishMessage} from "@/lib/messageApi";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ErrorMessage from "@/components/error";

export default function Home() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<DataFromMessageForm>({
        resolver: zodResolver(checkMessageFormData),
    });
    const handleFormSubmit = async (data: DataFromMessageForm) => {
        const note = data.note;
        try {
        await publishMessage({
            note: note
        });
    } catch (error) {
      console.log("Something went wrong!");
    }
  };
  return (
    <main className="bg-[url('/backg.jpg')] bg-center bg-no-repeat bg-cover min-h-screen flex flex-col justify-center">
        <div>
            <form
                className="-mt-10 mb-10 backdrop-blur-md bg-gray-900/10 p-6 rounded-md text-white w-4/5 md:-mt-20 lg:-mt-20 md:w-1/3"
                onSubmit={handleSubmit(handleFormSubmit)}
            >
                <div>
                    <label className="font-sans" htmlFor="note">
                            Write Tiny Message Here
                        </label>
                        <Input
                            className="mb-4 mt-2 font-sans text-black"
                            type="text"
                            placeholder="Message"
                            id="note"
                            {...register("note")}
                        />
                        {errors.note && <ErrorMessage message={errors.note.message} />}

                    <Button className="mt-4 font-mono" type="submit">
                        Publish
                    </Button>
                </div>
            </form>
        </div>
        <div></div>
    </main>
  );
}
