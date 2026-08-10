import type { Metadata } from "next";
import { CoursesGrid } from "@/components/sites/scenerepresentations-org-8a68da94/courses-dc2aaa46/CoursesGrid";
import { SiteShell } from "@/components/sites/scenerepresentations-org-8a68da94/shared/SiteShell";

export const metadata: Metadata = {
  title: "Teaching",
};

export default function CoursesPage() {
  return (
    <SiteShell>
      <main className="srg-main" id="main-content">
        <CoursesGrid />
      </main>
    </SiteShell>
  );
}
