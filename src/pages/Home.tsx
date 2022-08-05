import React from 'react';
import '../layout/styles/Home.css';

// import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { 
    AppBar, 
    Box,
    Divider, 
    Drawer, 
    IconButton, 
    List, ListItem, 
    ListItemButton, 
    ListItemIcon, 
    ListItemText, 
    Toolbar, 
    Typography, 
    Grid ,
    useTheme,
    Switch
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import AppsIcon from '@mui/icons-material/Apps';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import InboxIcon from '@mui/icons-material/Inbox';
import MailIcon from '@mui/icons-material/Mail';

interface Props {
    zIndex: number;
    color_bg: string;
    color_bg2: string;
    darkMode: boolean;
    ChangeDarkMode: () => void;
}

const drawerWidth = 240;

const videos = [
    {
      id: 1,
      title:
        'FEED DO USUÁRIO | Criando uma Rede Social com React.js e .NET Core #29',
      channel: 'Lucas Nhimi',
      views: '11 mi de visualizações',
      date: 'há 1 semana',
      avatar: '/images/avatar.jpeg',
      thumb: '/images/thumb1.png',
    },
    {
      id: 2,
      title:
        'COMO MELHORAR SEU CODIGO JAVASCRIPT (ESLINT + PRETTIER + EDITORCONFIG) | Dicas e Truques #02',
      channel: 'Lucas Nhimi',
      views: '957 mil visualizações',
      date: 'há 1 semana',
      avatar: '/images/avatar.jpeg',
      thumb: '/images/thumb2.png',
    },
    {
      id: 3,
      title:
        'CONTEXT API NO EDITOR DE POST | Criando uma Rede Social com React.js e .NET Core #27',
      channel: 'Lucas Nhimi',
      views: '106 mil visualizações',
      date: 'há 1 semana',
      avatar: '/images/avatar.jpeg',
      thumb: '/images/thumb3.png',
    },
    {
      id: 4,
      title:
        'CONTEXT API NO EDITOR DE POST | Criando uma Rede Social com React.js e .NET Core #27',
      channel: 'Lucas Nhimi',
      views: '5,6 mi de visualizações',
      date: 'há 1 semana',
      avatar: '/images/avatar.jpeg',
      thumb: '/images/thumb4.png',
    },
    {
      id: 5,
      title:
        'EDITOR DE POST COM MARKDOWN 2 | Criando uma Rede Social com React.js e .NET Core #26',
      channel: 'Lucas Nhimi',
      views: '2,2 mi de visualizações',
      date: 'há 1 semana',
      avatar: '/images/avatar.jpeg',
      thumb: '/images/thumb5.png',
    },
    {
      id: 6,
      title: 'COMO MIGRAR PARA REACT HOOKS | Dicas e Truques #01',
      channel: 'Lucas Nhimi',
      views: '233 mil visualizações',
      date: 'há 1 semana',
      avatar: '/images/avatar.jpeg',
      thumb: '/images/thumb6.png',
    },
    {
      id: 7,
      title:
        'PRÉ-REQUISITOS | Criando uma Rede Social com React.js e .NET Core #01',
      channel: 'Lucas Nhimi',
      views: '118 mil visualizações',
      date: 'há 1 semana',
      avatar: '/images/avatar.jpeg',
      thumb: '/images/thumb7.png',
    },
    {
      id: 8,
      title:
        'GIT E GITHUB | Criando uma Rede Social com React.js e .NET Core #04',
      channel: 'Lucas Nhimi',
      views: '1,9 mi de visualizações',
      date: 'há 1 semana',
      avatar: '/images/avatar.jpeg',
      thumb: '/images/thumb8.png',
    },
];

function Home({zIndex, color_bg, color_bg2, darkMode, ChangeDarkMode}: Props) {

    const theme = useTheme();

    return (
        <div style={{backgroundColor: color_bg}}>
            <AppBar position="fixed" color="inherit" style={{boxShadow: 'none',backgroundColor: color_bg,zIndex: zIndex+1}}>
                <Toolbar style={{zIndex: zIndex+1, backgroundColor: color_bg}}>
                    <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                        <MenuIcon />
                    </IconButton>
                    <img src={theme.palette.mode === "dark" ? "/images/branco.png" : "/images/preto.png"} alt="logo" className="logo"/>
                    <div className="grow"></div>
                    <Switch
                        checked={darkMode}
                        onChange={ChangeDarkMode}
                        inputProps={{ 'aria-label': 'controlled' }}
                    />
                    <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                        <VideoCallIcon />
                    </IconButton>
                    <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                        <AppsIcon />
                    </IconButton>
                    <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                        <MoreVertIcon />
                    </IconButton>
                    <Button variant="outlined" startIcon={<AccountCircle/>}>
                        Fazer login
                    </Button>
                </Toolbar>
            </AppBar>
            <Box display='flex'>
                <Drawer
                variant="permanent"
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: { 
                        width: drawerWidth, 
                        boxSizing: 'border-box',
                        borderRight: 'none',
                        backgroundColor: color_bg
                    },
                }}

            >
                <Toolbar />
                <Box sx={{ overflow: 'auto' }}>
                <List>
                    {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                        <ListItemIcon>
                            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                        </ListItemIcon>
                        <ListItemText primary={text} classes={{
                            primary: 'font'
                        }}/>
                        </ListItemButton>
                    </ListItem>
                    ))}
                </List>
                <Divider />
                <List>
                    {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                        <ListItemIcon>
                            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                        </ListItemIcon>
                        <ListItemText primary={text} classes={{
                            primary: 'font'
                        }}/>
                        </ListItemButton>
                    </ListItem>
                    ))}
                </List>
                </Box>
                <Divider/>
                <Box p={2}>
                    <Typography variant='body1'>
                        faça login para curtir vídeos, comentar e se inscrever.
                    </Typography>
                    <Box mt={2}>
                        <Button 
                            variant='outlined'
                            color='primary'
                            startIcon={<AccountCircle/>}
                        >
                            Fazer login
                        </Button>
                    </Box>
                </Box>
                </Drawer>
                <Box p={10} style={{ backgroundColor: color_bg2, height: '100vh'}}>
                        <Typography
                            variant='h5'
                            color='textPrimary'
                            style={{fontWeight: 800}}
                            textAlign='start'
                            mb={2}
                        >
                            Recomendados
                        </Typography>

                        <Grid container spacing={3}>
                            {
                                videos.map((video, index) => (
                                    <Grid item lg={3} md={4} sm={6} xs={12}>
                                        <Box>
                                            <img 
                                                style={{width: '100%'}}
                                                src={video.thumb} 
                                                alt={video.title} 
                                            />
                                            <Box>
                                                <Typography
                                                    style={{fontWeight: 600}}
                                                    variant="body1"
                                                    color="textPrimary"
                                                    gutterBottom
                                                > 
                                                    {video.title}
                                                </Typography>
                                                <Typography
                                                    display="block"
                                                    variant="body2"
                                                    color="textSecondary"
                                                >
                                                    {video.channel}
                                                </Typography>
                                                <Typography
                                                    variant="body2"
                                                    color="textSecondary"
                                                >
                                                    {`${video.views} - ${video.date}` }
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </Grid>
                                ))
                            }
                        </Grid>
                </Box>
            </Box>
            
        </div>
        
    )
}


export default Home;