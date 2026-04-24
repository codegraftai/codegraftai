import AnimatedSection from "../../components/AnimatedSection";

export default function About() {
  return (
    <div className="py-24 bg-white dark:bg-gray-950 transition-colors duration-300">
      <div className="container mx-auto px-4 max-w-4xl">
        <AnimatedSection>
          <h1 className="text-5xl font-extrabold mb-10 text-gray-900 dark:text-white">About Us</h1>
          <div className="mb-12 rounded-[2rem] overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-800">
            <img src="/images/about.jpg" alt="About CodeGraft AI" className="w-full object-cover aspect-[21/9]" />
          </div>
          <p className="text-2xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed font-light">
            Architectural integrity and structural drift prevention.
          </p>
          <div className="prose prose-lg dark:prose-invert text-gray-600 dark:text-gray-400 space-y-6">
            <p className="text-lg">
              CodeGraft AI ensures that generated code respects your existing architecture. We build tools that parse ASTs, infer interfaces, and graft new logic into legacy systems with formal safety guarantees.
            </p>
            <p className="text-lg">
              Our open-source analyzers run in CI, catching structural mismatches between AI output and your domain models before they reach production. Stop rewriting; start grafting.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
