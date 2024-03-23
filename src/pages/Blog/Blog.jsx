import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import blog from '../../assets/images/blog.gif';
import './Blog.css';

const Blog = () => {
    return (
        <section className="blog-section">
            <div className="blog-image">
                <img src={blog} alt="blog" />
            </div>
            <div className="blog-info">
                <Accordion defaultExpanded>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        <Typography>What is a volunteer network?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Volunteering networks provide an opportunity for Volunteer Managers to share information and resources, discuss issues of common interest, access professional development and make new connections and collaborate on projects and activities. Networks can be based on location sector and purpose.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2-content"
                        id="panel2-header"
                    >
                        <Typography>How do I create a volunteer network?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            1. Conduct a community needs assessment. <br />
                            2. Set goals for your volunteer program. <br />
                            3. Craft a mission statement. <br />
                            4. Create a leadership team. <br />
                            5. Define your volunteer roles.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2-content"
                        id="panel2-header"
                    >
                        <Typography>What is the work of volunteer?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Volunteering is a voluntary act of an individual or group freely giving time and labor, often for community service. Many volunteers are specifically trained in the areas they work, such as medicine, education, or emergency rescue.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2-content"
                        id="panel2-header"
                    >
                        <Typography>Will volunteering make me happy?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Volunteering reduces stress and increases positive, relaxed feelings by releasing dopamine. By spending time in service to others, volunteers report feeling a sense of meaning and appreciation.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2-content"
                        id="panel2-header"
                    >
                        <Typography>What is an example of volunteer experience?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Volunteering can range from hands-on activities such as building homes, teaching, or providing medical care, to behind-the-scenes work like fundraising, administration, or marketing.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>
        </section>
    );
};

export default Blog;