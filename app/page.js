import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="container mx-auto py-20 px-8 text-center mb-20">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold pb-6 flex flex-col mt-15 text-gray-800">
          Elevate Your Operations
        </h1>
        <p className="text-gray-600">
          Empower teams with smarter project management
        </p>
        <div className="flex justify-center gap-4 mt-14">
          <Link href="/onboarding">
            <Button
              size="lg"
              className="bg-blue-500 text-white px-6 py-3 text-lg"
            >
              Get Started
            </Button>
          </Link>
          <Link href="#features">
            <Button
              size="lg"
              className="bg-white text-blue-500 border-2 border-blue-500  px-6 py-3 text-lg hover:bg-blue-500 hover:text-white transition"
            >
              Learn More
            </Button>
          </Link>
        </div>
      </section>

      <section
        id="features"
        className="container mx-auto py-20 px-8 text-center bg-gray-200 rounded-lg"
      >
        <h2 className="text-4xl font-bold mb-10 text-gray-800">
          Why Choose Hira?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="px-6 py-20 border rounded-lg shadow-sm hover:shadow-lg transition bg-gray-50">
            <h3 className="text-2xl font-semibold mb-4 text-gray-700">
              Intuitive Interface
            </h3>
            <p className="text-gray-600">
              Navigate with ease using our user-friendly design.
            </p>
          </div>
          <div className="px-6 py-20 border rounded-lg shadow-sm hover:shadow-lg transition bg-gray-50">
            <h3 className="text-2xl font-semibold mb-4 text-gray-700">
              Real-time Collaboration
            </h3>
            <p className="text-gray-600">
              Work together seamlessly with instant updates.
            </p>
          </div>
          <div className="px-6 py-20 border rounded-lg shadow-sm hover:shadow-lg transition bg-gray-50">
            <h3 className="text-2xl font-semibold mb-4 text-gray-700">
              Customizable Workflows
            </h3>
            <p className="text-gray-600">
              Tailor your project management to fit your teams needs.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
