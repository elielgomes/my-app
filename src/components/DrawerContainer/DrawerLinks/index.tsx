import React from "react";
import { Text, Box, Link } from "@chakra-ui/react";
import { Rubik } from "@next/font/google";
import { SocialMediaButtons } from "@/components";
import { INavLinks, IRefSections } from "@/components/Navbar";
import strings from "@/resources/strings";

interface IProps {
	onClose: () => void;
	navRefs: IRefSections;
}

const drawerStrings = strings.components.navbar

const rubik = Rubik({
	weight: '400',
	subsets: ['latin'],
	style: "normal",
})

export const DrawerLinks: React.FC<IProps> = ({ onClose, navRefs }) => {

	const fontSizeBreakPoint = { base: "sm", lg: "md" };

	const onGoSection = (section: React.RefObject<HTMLElement>) => {
		section.current?.scrollIntoView();
	}

	const DrawerLinks: INavLinks[] = [
		{
			text: drawerStrings.home,
			scroll: navRefs.mainRef
		},
		{
			text: drawerStrings.about,
			scroll: navRefs.aboutRef
		},
		{
			text: drawerStrings.galery,
			scroll: navRefs.galeryRef
		},
		{
			text: drawerStrings.team,
			scroll: navRefs.teamRef
		},
		{
			text: drawerStrings.contact,
			scroll: navRefs.contactRef
		}
	]


	return (
		<>
			<Box
				display="flex"
				mt={2}
				flexDirection="column"
				alignItems="center"
			>
				{DrawerLinks.map((item) => (
					<Link
						key={item.text}
						onClick={() => onGoSection(item.scroll)}
						display="flex"
						border="1px solid transparent"
						_hover={{
							textDecoration: "none",
							borderBottomColor: "tertiary.50"
						}}
						justifyContent="center"
						alignItems="center"
						mb={4}
					>
						<Text
							fontSize={fontSizeBreakPoint}
							color="primary.300"
							textTransform="uppercase"
							fontWeight="light"
							style={{
								fontFamily: rubik.style.fontFamily
							}}
						>
							{item.text}
						</Text>
					</Link>
				))}
				<SocialMediaButtons flexProps={{ pt: "40px" }} />
			</Box>
		</>
	);
};
