import { Link, Outlet, useLoaderData, Form } from "react-router-dom";
import { getContacts, createContact } from "../storage/contacts";
import Header from "../components/header/Hedaer";

export async function action() {
  const contact = await createContact();
  return { contact };
}

export async function loader() {
  const contacts = await getContacts();
  return { contacts };
}

export default function Root() {
  return (
    <>
      <Header />
      <div className="container-sm">
        <Outlet />
      </div>
    </>
  );
}
