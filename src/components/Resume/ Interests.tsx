const interests = ["Semantics", "TED Talks", "Blogging", "Udemy", "Behavioral"];

export const Interests = () => {
  return (
    <section className="my-10 space-y-4">
      <h2 className="text-start text-2xl font-semibold text-gray-800">
        Interests
      </h2>
      <div className="flex flex-wrap gap-6">
        {interests.map((interest) => (
          <div
            key={interest}
            className="rounded-md bg-gray-100 px-3 py-1.5 text-sm text-gray-800"
          >
            {interest}
          </div>
        ))}
      </div>
    </section>
  );
};
