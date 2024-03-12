import Header from "./components/Header";

export default function Home() {
  return (
    <main>
      <Header />

      <section className="p-6 pt-32 max-w-4xl mx-auto">
        <div className="max-w-md mb-8">
          <h1 className="text-6xl font-bold">
            Your one link
            <br /> for everything
          </h1>
          <h2 className="text-gray-500 text-xl mt-6">
            Share your links, social profiles, contact info and more on one page
          </h2>
        </div>
        <form
          action=""
          className="inline-flex flex items-center shadow-lg shadow-gray-500/20"
        >
          <span className="bg-white py-4 pl-4">LinkList.to/</span>
          <input type="text" className="py-4" placeholder="username" />
          <button type="submit" className="bg-blue-500 text-white p-4 px-6">
            Join for free
          </button>
        </form>
      </section>
    </main>
  );
}
