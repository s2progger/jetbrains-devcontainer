import { json, MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";


export const loader = async () => {
    const backend_message = await fetch("http://localhost:8080/message").then(res => res.text());

    return json({ backend_message});
}


export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const { backend_message } = useLoaderData<typeof loader>();

  return (
      <div>
        <h1 className="text-3xl">Full stack</h1>
        <p className="text-lg">
          { backend_message }
        </p>
      </div>
  );
}
