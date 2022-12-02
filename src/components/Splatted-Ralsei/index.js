import { Link as RouterLink } from "react-router-dom";
import Footer from "../footer";
//! MUI IMPORTS
import Link from "@mui/material/Link";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import { styled, Typography } from "@mui/material";

//! MUI ICONS
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import "./index.css";

const Background = styled(Box)(({ theme }) => ({
	display: "flex",
	flexDirection: "column",
	...theme.typography.body2,
	textAlign: "center",
	color: theme.palette.text.secondary,
	minHeight: "100vh",
	maxHeight: "fit-content",
	borderRadius: 0,
	backgroundImage:
		"linear-gradient(to bottom, #0b1833, #0b1833, #0b1833, #0b1833, #0b1833, #0c1e3b, #0d2543, #0e2c4b, #0e3c5d, #0a4c6e, #065d7e, #026f8e)",
}));

function SpltRls() {
	return (
		<Background>
			<div className="container">
				<div className="paw-right1"></div>
				<div className="paw-right2"></div>
				<div className="paw-right3"></div>
				<div className="paw-right4"></div>
				<div className="paw-right5"></div>
				<div className="paw-right6"></div>
				<div className="paw-right7"></div>
				<div className="paw-right8"></div>
				<div className="paw-right9"></div>
				<div className="paw-right10"></div>
				<div className="paw-right11"></div>
				<div className="paw-right12"></div>
				<div className="paw-right13"></div>
				<div className="paw-right14"></div>
				<div className="paw-right15"></div>
				<div className="paw-right16"></div>
				<div className="paw-right17"></div>
				<div className="paw-right18"></div>
				<div className="paw-right19"></div>
				<div className="paw-right20"></div>
				<div className="paw-left1"></div>
				<div className="paw-left2"></div>
				<div className="paw-left3"></div>
				<div className="paw-left4"></div>
				<div className="paw-left5"></div>
				<div className="paw-left6"></div>
				<div className="paw-left7"></div>
				<div className="paw-left8"></div>
				<div className="paw-left9"></div>
				<div className="paw-left10"></div>
				<div className="paw-left11"></div>
				<div className="paw-left12"></div>
				<div className="paw-left13"></div>
				<div className="paw-left15"></div>
				<div className="paw-left16"></div>
				<div className="paw-left17"></div>
				<div className="paw-left18"></div>
				<div className="paw-left19"></div>
				<div className="paw-left20"></div>
				<div className="paw-left21"></div>
				<div className="paw-left22"></div>
				<div className="body-1"></div>
				<div className="body-2"></div>
				<div className="body-3"></div>
				<div className="body-4"></div>
				<div className="body-5"></div>
				<div className="body-6"></div>
				<div className="body-7"></div>
				<div className="body-8"></div>
				<div className="body-9"></div>
				<div className="body-10"></div>
				<div className="body-11"></div>
				<div className="body-12"></div>
				<div className="body-13"></div>
				<div className="body-14"></div>
				<div className="body-15"></div>
				<div className="body-16"></div>
				<div className="body-17"></div>
				<div className="body-18"></div>
				<div className="body-19"></div>
				<div className="body-20"></div>
				<div className="body-21"></div>
				<div className="body-22"></div>
				<div className="body-23"></div>
				<div className="body-24"></div>
				<div className="body-25"></div>
				<div className="body-26"></div>
				<div className="body-27"></div>
				<div className="body-28"></div>
				<div className="body-29"></div>
				<div className="body-30"></div>
				<div className="body-31"></div>
				<div className="body-32"></div>
				<div className="body-33"></div>
				<div className="body-34"></div>
				<div className="body-35"></div>
				<div className="body-36"></div>
				<div className="body-37"></div>
				<div className="body-38"></div>
				<div className="arm-right-1"></div>
				<div className="arm-right-2"></div>
				<div className="arm-right-3"></div>
				<div className="arm-right-4"></div>
				<div className="arm-right-5"></div>
				<div className="arm-right-6"></div>
				<div className="arm-right-7"></div>
				<div className="arm-right-8"></div>
				<div className="arm-right-9"></div>
				<div className="arm-right-10"></div>
				<div className="arm-right-11"></div>
				<div className="arm-right-12"></div>
				<div className="arm-right-13"></div>
				<div className="arm-right-14"></div>
				<div className="arm-left-1"></div>
				<div className="arm-left-2"></div>
				<div className="arm-left-3"></div>
				<div className="arm-left-4"></div>
				<div className="arm-left-5"></div>
				<div className="arm-left-6"></div>
				<div className="arm-left-7"></div>
				<div className="arm-left-8"></div>
				<div className="arm-left-9"></div>
				<div className="arm-left-10"></div>
				<div className="scarf-1"></div>
				<div className="scarf-2"></div>
				<div className="scarf-3"></div>
				<div className="scarf-4"></div>
				<div className="scarf-5"></div>
				<div className="scarf-6"></div>
				<div className="scarf-7"></div>
				<div className="scarf-8"></div>
				<div className="scarf-9"></div>
				<div className="scarf-10"></div>
				<div className="scarf-11"></div>
				<div className="scarf-12"></div>
				<div className="scarf-13"></div>
				<div className="scarf-14"></div>
				<div className="scarf-15"></div>
				<div className="scarf-16"></div>
				<div className="scarf-17"></div>
				<div className="scarf-18"></div>
				<div className="scarf-19"></div>
				<div className="scarf-20"></div>
				<div className="scarf-21"></div>
				<div className="scarf-22"></div>
				<div className="scarf-23"></div>
				<div className="scarf-24"></div>
				<div className="scarf-25"></div>
				<div className="head-1"></div>
				<div className="head-2"></div>
				<div className="head-3"></div>
				<div className="head-4"></div>
				<div className="head-5"></div>
				<div className="head-6"></div>
				<div className="head-7"></div>
				<div className="head-8"></div>
				<div className="head-9"></div>
				<div className="head-10"></div>
				<div className="head-11"></div>
				<div className="head-12"></div>
				<div className="head-13"></div>
				<div className="head-14"></div>
				<div className="head-15"></div>
				<div className="head-16"></div>
				<div className="head-17"></div>
				<div className="head-18"></div>
				<div className="head-19"></div>
				<div className="head-20"></div>
				<div className="head-21"></div>
				<div className="head-22"></div>
				<div className="head-23"></div>
				<div className="head-24"></div>
				<div className="head-25"></div>
				<div className="head-26"></div>
				<div className="head-27"></div>
				<div className="head-28"></div>
				<div className="head-29"></div>
				<div className="head-30"></div>
				<div className="head-31"></div>
				<div className="head-32"></div>
				<div className="head-33"></div>
				<div className="head-34"></div>
				<div className="head-35"></div>
				<div className="head-36"></div>
				<div className="head-37"></div>
				<div className="head-38"></div>
				<div className="head-39"></div>
				<div className="head-40"></div>
				<div className="head-41"></div>
				<div className="head-42"></div>
				<div className="head-43"></div>
				<div className="head-44"></div>
				<div className="head-45"></div>
				<div className="head-46"></div>
				<div className="head-47"></div>
				<div className="head-48"></div>
				<div className="head-49"></div>
				<div className="head-50"></div>
				<div className="head-51"></div>
				<div className="head-52"></div>
				<div className="head-53"></div>
				<div className="head-54"></div>
				<div className="head-55"></div>
				<div className="head-56"></div>
				<div className="head-57"></div>
				<div className="head-58"></div>
				<div className="head-59"></div>
				<div className="details-1"></div>
				<div className="details-2"></div>
				<div className="details-3"></div>
				<div className="details-4"></div>
				<div className="details-5"></div>
				<div className="details-6"></div>
				<div className="details-7"></div>
				<div className="details-8"></div>
				<div className="details-9"></div>
				<div className="details-10"></div>
				<div className="details-11"></div>
				<div className="details-12"></div>
				<div className="details-13"></div>
				<div className="details-14"></div>
				<div className="details-15"></div>
				<div className="details-16"></div>
				<div className="details-17"></div>
				<div className="details-18"></div>
				<div className="details-19"></div>
				<div className="details-20"></div>
				<div className="details-21"></div>
				<div className="details-22"></div>
				<div className="details-23"></div>
				<div className="details-24"></div>
				<div className="details-25"></div>
				<div className="details-26"></div>
				<div className="details-27"></div>
				<div className="details-28"></div>
				<div className="details-29"></div>
				<div className="details-30"></div>
				<div className="details-31"></div>
				<div className="details-32"></div>
				<div className="details-33"></div>
				<div className="details-34"></div>
				<div className="details-35"></div>
				<div className="details-36"></div>
				<div className="details-37"></div>
				<div className="details-38"></div>
				<div className="details-39"></div>
				<div className="details-40"></div>
				<div className="details-41"></div>
				<div className="details-42"></div>
				<div className="details-43"></div>
				<div className="details-44"></div>
				<div className="details-45"></div>
				<div className="details-46"></div>
				<div className="details-47"></div>
				<div className="details-48"></div>
				<div className="details-49"></div>
				<div className="details-50"></div>
				<div className="details-51"></div>
			</div>
			<Fab
				sx={{ position: "absolute", top: 10, left: 10 }}
				component={RouterLink}
				to="/home"
				color="primary"
				size="small"
			>
				<ArrowBackIcon />
			</Fab>
			<Footer />
		</Background>
	);
}

export default SpltRls;
