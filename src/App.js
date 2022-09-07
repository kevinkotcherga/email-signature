import './App.scss';

function App() {
	return (
		<table>
			<tr>
				<td className="td-empty-top" colSpan={3}></td>
			</tr>
			<tr>
				<td rowspan="5" className="td-img">
					<img
						class="dev-in-net"
						src="https://firebasestorage.googleapis.com/v0/b/signature-email-efddf.appspot.com/o/DEV-IN-NET%20(16).gif?alt=media&token=0dd7405e-c439-448b-9a61-86080f982d46"
						alt=""
					/>
				</td>
				<td className="bold keryan">Keryan Sanié</td>
			</tr>
			<tr>
				<td className="font-size">
					<span className="bold">Fondateur</span>
					<span className="vertical-divider"></span>Développeur Frontend
				</td>
			</tr>
			<tr>
				<td className="td-skip-a-line"></td>
			</tr>
			<tr>
				<td className="font-size">
					<a className="color-link" href="http://www.devinnet.fr/">
						<span>www.devinnet.fr</span>
					</a>
					<span className="vertical-divider"></span>Tél: 06 34 17 20 14
				</td>
			</tr>
			<tr>
				<td className="font-size">48 Rue Andy Warhol, 34000 Montpellier</td>
			</tr>
			<tr>
				<td></td>
				<td className="font-size center">
					<a className="color-link" href="mailto:contact@devinnet.fr">
						<span>contact@devinnet.fr</span>
						<span className="vertical-divider"></span>
					</a>
					<a
						href="https://www.linkedin.com/company/dev-in-net/"
						target="_blank"
						rel="noreferrer"
					>
						<img
							className="linkedin-devinnet center"
							src="https://firebasestorage.googleapis.com/v0/b/signature-email-efddf.appspot.com/o/icons8-linkedin-entour%C3%A9-60%20(5).png?alt=media&token=2924fe42-2164-4c55-90bc-1bbfbbe4ec03"
							alt=""
						/>
					</a>
				</td>
			</tr>
			<tr>
				<td></td>
				<td className="td-skip-a-line"></td>
			</tr>
			<tr>
				<td></td>
				<td className="">
					<a href="https://github.com/keryanS" target="_blank" rel="noreferrer">
						<img
							className="logo"
							src="https://firebasestorage.googleapis.com/v0/b/signature-email-efddf.appspot.com/o/icons8-github-60%20(5).png?alt=media&token=dd166869-5e2c-4166-8a50-e3cbf3087427"
							alt=""
						/>
					</a>
					<a
						href="http://www.keryan.sanie.fr/"
						target="_blank"
						rel="noreferrer"
					>
						<img
							className="logo"
							src="https://firebasestorage.googleapis.com/v0/b/signature-email-efddf.appspot.com/o/icons8-domaine-60%20(5).png?alt=media&token=9b7410d1-fdae-4dbe-a351-4be25fe3158a"
							alt=""
						/>
					</a>
					<a
						href="https://www.linkedin.com/in/keryansanie/"
						target="_blank"
						rel="noreferrer"
					>
						<img
							className="logo"
							src="https://firebasestorage.googleapis.com/v0/b/signature-email-efddf.appspot.com/o/icons8-linkedin-entour%C3%A9-60%20(5).png?alt=media&token=2924fe42-2164-4c55-90bc-1bbfbbe4ec03"
							alt=""
						/>
					</a>
				</td>
			</tr>
			<tr>
				<td className="td-empty-bottom" colSpan={3}>
					{' '}
				</td>
			</tr>
		</table>
	);
}

export default App;
