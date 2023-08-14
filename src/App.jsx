import { Stack, Typography, List, ListItem, ListItemButton, ListItemText, Chip, ThemeProvider, Box, createTheme, Stepper, Step, StepLabel, Button } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import { ReactSVG } from 'react-svg'


function SideItem({ name, translate, icon, active, setActive }) {
	const inactiveStyle = {
		marginRight: '8px',
		marginLeft: '25px',
		translate: '0px -2px',
		borderRadius: '3px'
	
	}
	const activeStyle = {
		marginLeft: '25px',
		borderRadius: '3px',
		marginRight: '8px',
		filter: "invert(9%) sepia(99%) saturate(5630%) hue-rotate(246deg) brightness(111%) contrast(148%)",
		color: "#563BDB",
		background: '#EEEBFB',
		borderLeft: "7px solid #563BDB"
	}

	return (<ListItem disablePadding>
		<ListItemButton disableRipple
			onClick={() => {
				setActive(prev => {
					const newState = {}
					Object.keys(prev).forEach(key => {
						newState[key] = key == name
					})
					return newState
				})
			}}
			style={active[name] ? activeStyle : inactiveStyle}
		>
			<img src={icon} style={{ marginRight: '8px' }} />
			<ListItemText style={{ fontSize: '14px' }}>
				{name}
			</ListItemText>

		</ListItemButton>
	</ListItem>);
}


const App = () => {

	const [active, setActive] = useState({
		'DashBoard': false,
		'Coverletters': false,
		'CV/Resume': false,
		'Interview Prep': false,
		'Contacts': false,
		'Job Tracker': false,
		'Get Extension': false,
		'Refer & Earn': false,
		'Help and Support': false,
		'Log out': false,
	})

	return (
		<>
			<Stack component='section' direction='row' sx={{ width: '100vw', minHeight: '100vh' }}>
				{/* sidebar */}
				<Stack width='20%' sx={{ border: '0.1px solid #eee', minHeight: '100vh', paddingLeft: '5px' }} spacing={1}>
					<Stack>
						<List sx={{ translate: '0px 0em' }}>

							<ListItem>
								<img src="/coverai--header.png" />
								<Typography style={{ color: '#3F4E72', fontWeight: '600', marginLeft: '10px', fontSize: '25px' }}>Coverai</Typography>
							</ListItem>
						</List>
					</Stack>
					<Stack flexGrow={1}>
						<List>
							<SideItem name="DashBoard" translate="5px" icon="/home.svg" active={active} setActive={setActive} />
							<SideItem name="Coverletters" translate="5px" icon="/cover.svg" active={active} setActive={setActive} />
							<SideItem name="CV/Resume" translate="5px" icon="/cv.svg" active={active} setActive={setActive} />
							<SideItem name="Interview Prep" translate="5px" icon="/interview.svg" active={active} setActive={setActive} />
							<SideItem name="Contacts" translate="5px" icon="/contacts.svg" active={active} setActive={setActive} />
							<SideItem name="Job Tracker" translate="5px" icon="/tracker.svg" active={active} setActive={setActive} />
						</List>
					</Stack>
					<Stack>
						<List>
							<SideItem name="Get Extension" translate="5px" icon="/extension.svg" active={active} setActive={setActive} />
							<SideItem name="Refer & Earn" translate="5px" icon="/refer.svg" active={active} setActive={setActive} />
							<SideItem name="Help and Support" translate="5px" icon="/help.svg" active={active} setActive={setActive} />
							<SideItem name="Log out" translate="5px" icon="/logout.svg" active={active} setActive={setActive} />
						</List>
					</Stack>
				</Stack>


				{/* main */}
				<Stack component='main'
					flexGrow={1}
				>

					{/* header */}
					<Stack
						spacing={1}
						direction='row'
						height='4em'
						sx={{ border: '0.1px solid #eee', padding: '1.25em 2em' }}>

						<Stack>
							<Typography sx={{ color: '#aaa' }}>Coverletters /</Typography>
						</Stack>
						<Stack flexGrow={1} style={{ height: '50%' }}>
							<Typography>Home</Typography>
						</Stack>
						<Stack direction="row" spacing={1}>
							<Stack direction='row'>
								<Typography>Credit</Typography>
								<Typography>&nbsp;</Typography>
								<Typography>left:</Typography>
								<Typography>10</Typography>

							</Stack>

							<img src='/coin.svg' alt='coin' />
							<Chip sx={{ background: '#EEEFF0', translate: '0em -0.5em' }} label="Free plan" />

							<img src="/bell.svg" alt='bell' />

							<Box style={{ width: '1px', height: '25px', background: '#917AFF' }} />

							<img src="/profile.svg" />
						</Stack>
					</Stack>

					{/* intro box */}
					<Stack sx={{
						marginTop: '1em',
						marginLeft: '4em'
					}} spacing={0}>
						<Typography fontWeight={600} fontSize='28px'>Hello, Chris!</Typography>
						<Typography fontSize='14px'>It's time to land your next role, Let's get to it</Typography>
					</Stack>

					{/* mainbox */}
					<Stack sx={{
						position: 'absolute',
						margin: '12em 0px',
						border: '1px solid #eee',
						width: '70%',
						height: '60%',
						alignSelf: 'center',

					}}>
						<Stack spacing={2} alignItems='center' direction='row' height='52px' style={{ border: '0.5px solid #eee', padding: '35px 20px' }}>
							<Stack>
								<Typography >Getting Started</Typography>
							</Stack>
							<Stack flexGrow={1}>
								<Chip label="Step 1 out of 4" style={{ background: '#EEEBFB', width: '120px', fontSize: '12px', color: '#00085A', height: '30px', fontWeight: '500' }} />
							</Stack>
							<Stack direction='row' height="20px">
								{Array(4).fill('_').map((v, i, a) => {
									let background;
									if (i == 0) {
										background = "#563BDB"
									} else {
										background = "#EEEBFB"
									}
									return (
										<Stack alignItems='center' direction='row' key={i}>

											<Chip label={i + 1} style={{ borderRadius: '50%', width: '25px', height: '25px', paddingRight: '8px', background: `${background}` }} />
											{i != a.length - 1 &&
												<Box style={{ width: '10px', height: '4px', background: "#EEEBFB" }} />}
										</Stack>
									)
								})}
							</Stack>
						</Stack>
						<Stack spacing={0} alignSelf='center' alignItems='center' justifyItems='center'
							style={{ height: '100%', width: '70%', paddingTop: '5em' }}>
							<Stack>
								<Typography fontWeight={600} fontSize='18px'>Get Familiar with Accountable</Typography>
							</Stack>
							<Stack px={5} pb={5}>
								<Typography fontWeight={400} fontSize='14px' textAlign='center'>Let's get you started with accountable through a simple walkthrough guide that explains how it works</Typography>
							</Stack>
							<Stack direction='row' spacing={3}>
								<Button style={{
									background: '#563BDB',
									padding: '0.8em'
								}}>
									<Typography
										style={{ color: '#ffffff', fontSize: '14px', fontWeight: '600' }}
									>New CV/Resume</Typography>
								</Button>
								<Button variant='outlined' color='secondary'>
									<Typography style={{ color: '#563BDB', fontSize: '14px', fontWeight: '600' }}>New Coverletter</Typography>
								</Button>
							</Stack>
						</Stack>
					</Stack>
				</Stack>

			</Stack>
		</>
	)

}
export default App
