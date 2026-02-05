import Section from "../components/section";

export default function ContactSection() {
  return (
    <Section title="Contact">
      <table className="table-auto mr-auto">
        <tbody>
          <tr>
            <td className="pr-4 py-2">Email:</td>
            <td className="py-2 text-gray-500">fetrafaneva@gmail.com</td>
          </tr>
          <tr>
            <td className="pr-4 py-2">Phone:</td>
            <td className="py-2 text-gray-500">+261 34 43 575 15</td>
          </tr>
        </tbody>
      </table>
    </Section>
  );
}
