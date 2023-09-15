import { Suspense } from "react";
import Link from "next/link";
import Repo from "@/app/components/repo";
import RepoDir from "@/app/components/repoDir";

export default function RepoPage({ params: { name } }) {
  return (
    <div className="card">
      <Link href="/code/repos" className="btn btn-back">
        Back To Repositories
      </Link>
      <Suspense fallback={<div>Loading repo...</div>}>
        <Repo name={name} />
      </Suspense>
      <Suspense fallback={<div>Loading directories...</div>}>
        <RepoDir name={name} />
      </Suspense>
    </div>
  );
}
