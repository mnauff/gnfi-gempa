import PageWrapper from "./components/page-wrapper";
import { promises as fs } from "node:fs"

export default async function GeneratePage() {
	const data = await fs.readFile(`${process.cwd()}/public/article/generated-blocks.json`, 'utf8')
	const meta = await fs.readFile(`${process.cwd()}/public/article/generated-meta.json`, 'utf8')
	return <PageWrapper initBlocks={JSON.parse(data) ?? []} initMetadata={JSON.parse(meta)} />
}
