import * as React from 'react';
import { Drawer, List, ListItem, ListItemText, Accordion, AccordionSummary, AccordionDetails, Typography, Box } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Sidebar() {
  return (
    <Drawer
      variant="permanent"
      anchor="left"
      sx={{
        width: 240,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: 240,
          boxSizing: 'border-box',
          marginTop: '7.3vh', // Use viewport height percentage for dynamic spacing
          height: '92vh',// Adjust height to not span the entire length, with dynamic adjustment
           // Rounded corners on the right
          
          marginLeft: '0vw',
          marginBottom :'5vh'
        },
      }}
    >
      <Box sx={{ height: '3vh' }} /> {/* This creates the gap from the top */}
      <List>
        {['Home Page', 'Find Collaborator', 'Find Team Members', 'Connect with Alumni'].map((text) => (
          <ListItem button key={text} sx={{marginBottom: '8%', color: 'azure'}}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Accordion sx={{ marginBottom: '8px', backgroundColor: '#3a506b' }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography sx={{color: 'azure'}}>Search by Category</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <List>
            {['Web Development', 'Android', 'AI/ML', 'Web3.0', 'Python'].map((category) => (
              <ListItem button key={category}>
                <ListItemText primary={category}  sx={{color: 'azure'}} />
              </ListItem>
            ))}
          </List>
        </AccordionDetails>
      </Accordion>
    </Drawer>
  );
}

export default Sidebar;
