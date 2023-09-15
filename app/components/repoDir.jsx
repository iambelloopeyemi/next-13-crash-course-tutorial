import Link from "next/link";

async function fectchRepoContents(name) {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  const response = await fetch(
    `https://api.github.com/repos/iambelloopeyemi/${name}/contents`,
    {
      next: {
        revalidate: 60,
      },
    }
  );

  const contents = await response.json();
  return contents;
}

export default async function RepoDir({ name }) {
  const contents = await fectchRepoContents(name);
  const dirs = contents.filter((content) => content.type === "dir");

  return (
    <>
      <h3>Directories</h3>
      <ul>
        {dirs.map((dir) => (
          <li key={dir.path}>
            <Link href={`/code/repos/${name}/${dir.path}`}>{dir.path}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
