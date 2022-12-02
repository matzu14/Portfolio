import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";

function Footer() {
	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "row",
				justifyContent: "center",
				alignItems: "center",
				alignContent: "center",
				position: "sticky",
				marginTop: "auto",
			}}
		>
			Hecho con &nbsp;
			<Avatar src="https://cdn2.steamgriddb.com/file/sgdb-cdn/icon_thumb/d8c24ca8f23c562a5600876ca2a550ce.png" />
			&nbsp; por &nbsp;
			<Link href={"https://github.com/matzu14"} target={"_blank"}>
				matzu14
			</Link>
		</Box>
	);
}

export default Footer;
