import { notFound } from "next/navigation";

import { allCourses } from "contentlayer/generated";

export const allCoursesSlugs = allCourses.map(({ slug }) => ({ slug }));

export const sortedCourses = allCourses.sort((a, b) => {
  return Date.parse(a.datetime) - Date.parse(b.datetime);
});

export const upcomingCourses = sortedCourses.slice(0, 3);

export function findCourse(slug: string) {
  const course = allCourses.find((c) => c.slug === slug);

  if (!course) notFound();

  return course;
}
