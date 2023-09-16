import Heading from "./Heading";
import Link from "next/link";
import Section from "./Section";
import { useMDXComponent } from "next-contentlayer/hooks";

export default function MDXContent({ code }: { code: string }) {
  const Content = useMDXComponent(code);

  return (
    <Content
      components={{
        section: ({ children, ["data-heading-rank"]: headingRank }: any) => {
          switch (Number(headingRank)) {
            case 2:
              return (
                <Section
                  intent="black"
                  frequency="even"
                  className="max-w-3xl"
                  style={{ counterIncrement: "section" }}
                >
                  {children}
                </Section>
              );
            case 3:
              return <div className="mt-8 first-of-type:mt-0">{children}</div>;

            default:
              return children;
          }
        },
        a: ({ href, children }) => (
          <Link href={href as string}>{children}</Link>
        ),
        h2: ({ children }) => (
          <Heading
            as="h2"
            size={2}
            className="pb-[1em] before:text-accent-500 before:content-[counter(section)_'._']"
          >
            {children}
          </Heading>
        ),
        h3: ({ children }) => (
          <Heading as="h3" size={3} className="pb-[1em] text-accent-500">
            {children}
          </Heading>
        ),
        ol: ({ children }) => (
          <ol className="list-decimal ps-6 marker:font-bold marker:text-accent-500">
            {children}
          </ol>
        ),
        ul: ({ children }) => (
          <ul className="list-square ps-6 marker:text-accent-500">
            {children}
          </ul>
        ),
      }}
    />
  );
}
