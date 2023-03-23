import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import Link from 'next/link';

const PageNotFound = () => {
	const { t } = useTranslation();
	
	return (
		<section className="section is-medium">
			<div className="container">
				<div className="columns is-vcentered">
					<div className="column has-text-centered">
						<h1 className="title">
							{ t("paragraphs.page_not_found") }
						</h1>
						<p className="subtitle">
							{ t("paragraphs.an_unexpected_error_occurred") }
						</p>
						<Link href="/" className="button is-info">
							{ t("labels.home") }
						</Link>
					</div>
					<div className="column has-text-centered">
						<Image
							src="https://picsum.photos/200"
							alt="NFT 404"
							width={500}
							height={500}
						/>
					</div>
				</div>
			</div>
		</section>
	);
}

export default PageNotFound;