import Image from 'next/image';

export default function CareerPage() {
  return (
    <div className="bg-gray-100 min-h-screen p-8">
      {/* Hero Section */}
      <section className="relative bg-cover bg-center h-80 w-full" style={{ backgroundImage: "url('/images/career-image.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 flex flex-col items-center justify-center text-white h-full">
          <h1 className="text-4xl font-bold">Join Our Team</h1>
          <p className="text-lg mt-4">Explore exciting career opportunities at our company.</p>
        </div>
      </section>

      {/* Job Listings Section */}
      <section className="mt-16">
        <h2 className="text-3xl font-semibold text-center mb-8">Current Openings</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Job Card */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold">Software Engineer</h3>
            <p className="mt-2 text-gray-600">Location: Remote</p>
            <p className="mt-2 text-gray-600">Experience: 2+ years</p>
            <p className="mt-4 text-sm text-gray-500">We are looking for a passionate Software Engineer to join our growing team. You will work on various exciting projects with cutting-edge technologies.</p>
            <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
              Apply Now
            </button>
          </div>

          {/* More Job Cards */}
          {/* Repeat for more job openings */}
        </div>
      </section>
    </div>
  );
}
