import type { Metadata } from "next";
import { MissionSection } from "@/components/sites/scenerepresentations-org-8a68da94/root-8a5edab2/MissionSection";
import { RecentPublications } from "@/components/sites/scenerepresentations-org-8a68da94/root-8a5edab2/RecentPublications";
import { RecentTalks } from "@/components/sites/scenerepresentations-org-8a68da94/root-8a5edab2/RecentTalks";
import styles from "@/components/sites/scenerepresentations-org-8a68da94/root-8a5edab2/home.module.css";
import { SiteShell } from "@/components/sites/scenerepresentations-org-8a68da94/shared/SiteShell";

export const metadata: Metadata = {
  title: "MIT CSAIL – Scene Representation Group",
};

export default function HomePage() {
  return (
    <SiteShell>
      <main className={`srg-main ${styles.homeMain}`} id="main-content">
        <MissionSection />
        <RecentPublications />
        <RecentTalks />
      </main>
    </SiteShell>
  );
}
