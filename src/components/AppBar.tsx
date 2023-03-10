import { useState, MouseEvent } from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import { CalendarMonth } from '@mui/icons-material'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
import MenuItem from '@mui/material/MenuItem'
import AdbIcon from '@mui/icons-material/Adb'
import { useTheme } from '@mui/material/styles'
import { MainLogo } from './MainLogo'
import { CONSTANTS } from 'src/utils/constants'
import { CustomButton, CustomModal } from './ui'

function ResponsiveAppBar() {
	const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null)
	const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null)

	const [open, setOpen] = useState(false)

	const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
		setAnchorElNav(event.currentTarget)
	}
	const handleOpenUserMenu = (event: MouseEvent<HTMLElement>) => {
		setAnchorElUser(event.currentTarget)
		setOpen(!open)
	}

	const handleCloseNavMenu = () => {
		setAnchorElNav(null)
	}

	const handleCloseUserMenu = () => {
		setAnchorElUser(null)
	}

	const theme = useTheme()

	const { text } = theme.palette

	return (
		<AppBar
			position='static'
			elevation={0}
			sx={{
				background: '#fff',
				color: text.secondary,
				marginBottom: { md: 10, sx: 5 },
			}}
		>
			<Container maxWidth='xl'>
				<CustomModal open={open} setModal={handleOpenUserMenu} />
				<Toolbar disableGutters variant='dense' style={{ overflow: 'hidden' }}>
					{/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
					<Typography
						variant='h6'
						noWrap
						component='a'
						href='/'
						sx={{
							mr: 2,
							display: { xs: 'none', md: 'flex' },
							fontFamily: 'monospace',
							fontWeight: 700,
							letterSpacing: '.3rem',
							color: 'inherit',
							textDecoration: 'none',
						}}
					>
						<MainLogo />
					</Typography>

					<Box
						sx={{
							flexGrow: 1,
							display: { xs: 'flex', md: 'none' },
						}}
					>
						<IconButton
							size='large'
							aria-label='account of current user'
							aria-controls='menu-appbar'
							aria-haspopup='true'
							onClick={handleOpenNavMenu}
							color='inherit'
						>
							<MenuIcon />
						</IconButton>
						<Menu
							id='menu-appbar'
							anchorEl={anchorElNav}
							anchorOrigin={{
								vertical: 'bottom',
								horizontal: 'left',
							}}
							keepMounted
							transformOrigin={{
								vertical: 'top',
								horizontal: 'left',
							}}
							open={Boolean(anchorElNav)}
							onClose={handleCloseNavMenu}
							sx={{
								display: { xs: 'block', md: 'none' },
							}}
						>
							{CONSTANTS.mainMenu.map((page) => (
								<MenuItem key={page.id} onClick={handleCloseNavMenu}>
									<Typography textAlign='center'>{page.link}</Typography>
								</MenuItem>
							))}
						</Menu>
					</Box>

					<AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
					<Typography
						variant='h5'
						noWrap
						component='a'
						href=''
						sx={{
							mr: 2,
							display: { xs: 'flex', md: 'none' },
							flexGrow: 1,
							fontFamily: 'monospace',
							fontWeight: 700,
							letterSpacing: '.3rem',
							color: 'inherit',
							textDecoration: 'none',
						}}
					>
						LOGO
					</Typography>
					<Box
						sx={{
							flexGrow: 1,
							display: { xs: 'none', md: 'flex' },
						}}
					>
						{CONSTANTS.mainMenu.map((page: any) => (
							<CustomButton
								variant='text'
								href={page.link === 'home' ? (page.href = '/') : page.href}
								linkStyle={{ color: theme.palette.text.primary }}
								key={page.id}
								onClick={handleCloseNavMenu}
								sx={{
									my: 2,
									color: text.primary,
									display: 'block',
								}}
								text={page.link}
							>
								{page}
							</CustomButton>
						))}
					</Box>

					<Box sx={{ flexGrow: 0 }}>
						<Tooltip title='Book Schedule'>
							<Button
								onClick={(e) => handleOpenUserMenu(e)}
								variant='outlined'
								endIcon={<CalendarMonth />}
							>
								Book Schedule
							</Button>
						</Tooltip>
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	)
}
export default ResponsiveAppBar
