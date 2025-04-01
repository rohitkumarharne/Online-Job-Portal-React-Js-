import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const hm = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <header className="bg-blue-600 text-white py-16 px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Find Your Dream Job</h1>
        <p className="text-lg mb-8">
          Search for jobs, connect with employers, and take your career to the
          next level.
        </p>
        <div className="flex justify-center items-center gap-2">
          <input
            type="text"
            placeholder="Search jobs, companies, or keywords"
            className="px-4 py-2 rounded-l-md border-none focus:outline-none w-1/2"
          />
          <Button className="rounded-r-md" variant="primary">
            <Search className="mr-2" /> Search
          </Button>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-12 px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="p-6 shadow-lg">
            <CardContent>
              <h3 className="text-xl font-semibold mb-2">
                Thousands of Job Listings
              </h3>
              <p className="text-gray-600">
                Explore opportunities across industries and find the one that
                suits your skills and passion.
              </p>
            </CardContent>
          </Card>
          <Card className="p-6 shadow-lg">
            <CardContent>
              <h3 className="text-xl font-semibold mb-2">
                Connect with Top Employers
              </h3>
              <p className="text-gray-600">
                Build professional relationships and network with hiring
                managers directly.
              </p>
            </CardContent>
          </Card>
          <Card className="p-6 shadow-lg">
            <CardContent>
              <h3 className="text-xl font-semibold mb-2">Career Resources</h3>
              <p className="text-gray-600">
                Access tools and tips to craft the perfect resume and ace your
                interviews.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-white py-12 px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          What Our Users Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="p-6 shadow-lg">
            <CardContent>
              <p className="text-gray-600 italic">
                "This portal made my job search so easy and efficient. Highly
                recommended!"
              </p>
              <p className="text-right text-gray-800 font-semibold mt-4">
                - Jane Doe
              </p>
            </CardContent>
          </Card>
          <Card className="p-6 shadow-lg">
            <CardContent>
              <p className="text-gray-600 italic">
                "I connected with my dream company within days of signing up.
                Amazing platform!"
              </p>
              <p className="text-right text-gray-800 font-semibold mt-4">
                - John Smith
              </p>
            </CardContent>
          </Card>
          <Card className="p-6 shadow-lg">
            <CardContent>
              <p className="text-gray-600 italic">
                "The career resources helped me improve my resume and get hired
                quickly."
              </p>
              <p className="text-right text-gray-800 font-semibold mt-4">
                - Emily Johnson
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-blue-600 text-white py-12 px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-lg mb-6">
          Sign up now and take the first step toward your dream career.
        </p>
        <Button className="bg-white text-blue-600 font-bold py-2 px-4 rounded-lg hover:bg-gray-200">
          Join Now
        </Button>
      </section>
    </div>
  );
};

export default hm;
