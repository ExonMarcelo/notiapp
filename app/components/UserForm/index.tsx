import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    // FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const formSchema = z.object({
    username: z.string().min(1, {
        message: "Completa este campo.",
    }),
    password: z.string().min(1, {
        message: "Completa este campo.",
    })
})

interface IProps{
    mode?: "register" | "login"
}

export default function UserForm({mode = "login"}:IProps) {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            password: "",
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }
    return (
        <>
            {
                mode === "login" ?
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="w-full mt-16">
                        <FormField
                            control={form.control}
                            name="username"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-xs">Usuario*</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Ingresa tu usuario" {...field} />
                                    </FormControl>
                                    <FormMessage className="text-xs font-normal" />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem className="mt-8">
                                    <FormLabel className="text-xs">Contraseña*</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Ingresa tu contraseña" {...field} type="password" />
                                    </FormControl>
                                    <FormMessage className="text-xs font-normal" />
                                </FormItem>
                            )}
                        />
                        <Button type="submit" variant="default" size="lg" className="bg-primary-custom hover:bg-indigo-700 w-full mt-32 text-md">Iniciar sesión</Button>
                        <p className="text-xs text-right mt-16">¿Aún no tienes cuenta? <span className="text-indigo-700 font-semibold cursor-pointer">Registrate</span></p>
                    </form>
                </Form>
                :
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="w-full mt-16">
                        <FormField
                            control={form.control}
                            name="username"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-xs">Usuario*</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Crea tu usuario" {...field} />
                                    </FormControl>
                                    <FormMessage className="text-xs font-normal" />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem className="mt-8">
                                    <FormLabel className="text-xs">Contraseña*</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Crea tu contraseña" {...field} type="password" />
                                    </FormControl>
                                    <FormMessage className="text-xs font-normal" />
                                </FormItem>
                            )}
                        />
                        <Button type="submit" variant="default" size="lg" className="bg-primary-custom hover:bg-indigo-700 w-full mt-32 text-md">Crear cuenta</Button>
                        <p className="text-xs text-right mt-16">¿Ya tienes cuenta? <span className="text-indigo-700 font-semibold cursor-pointer">Inicia sesión</span></p>
                    </form>
                </Form>

            }
        </>
    )
}