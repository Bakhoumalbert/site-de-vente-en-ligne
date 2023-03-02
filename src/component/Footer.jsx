import { useForm} from "react-hook-form";
import emailjs from "@emailjs/browser";

export const Footer = () => {

  const {register, handleSubmit, formState: {errors}} = useForm()
  const onSubmit = (data) => {
    			console.log(data);
          emailjs.send(
            "service_hbp2lyc",
            "template_gynhwms",
            {
              name: data.name,
              email: data.email,
              message: data.message,
            },
            "NDMGcnlvsLKnvMI6d"
          );
  		};

  return (
    <div className="max-x-[1640px] m-auto px-4 py-12 bg-slate-400">
      <div className="container mx-auto px-4 text-2xl font-extrabold justify-center item-center mb-10">
        Contactez-moi
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-5">
        <div className="mb-3">
          <label htmlFor="name" className="block">
            Nom
          </label>
          <input
            {...register("name", { required: true })}
            type="text"
            name="name"
            id="name"
            className="border border-black"
            placeholder="Entrer votre nom... "
          />
        </div>
        {errors.name && <p className="text-[red]">nom obligatoire</p>}
        <div className="mb-3">
          <label htmlFor="email" className="block">
            Email
          </label>
          <input
            {...register("email", { required: true })}
            type="email"
            name="email"
            id="email"
            className="border border-black"
            placeholder="Entrer votre Email... "
          />
        </div>
        {errors.email && <p className="text-[red]">Email obligatoire</p>}
        <div className="mb-3">
          <label htmlFor="message" className="block">
            message
          </label>
          <textarea
            {...register("message")}
            type="text"
            name="message"
            id="message"
            rows={5} // definir le nombre de ligne
            cols={25}
            className="border border-black resize-none"
            placeholder="Entrer votre message... "
          />
        </div>
        <input
          type="submit"
          className="block bg-[#44b8e3] text-white py-1 px-1 hover:bg-blue-600 rounded-2xl"
        />
      </form>
    </div>
  );
};
