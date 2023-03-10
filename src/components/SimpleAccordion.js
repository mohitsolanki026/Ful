import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <div className="accord">
      <Accordion 
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary  aria-controls="panel1d-content" id="panel1d-header">
          <Typography>How much will this cost?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            We offer free and paid plans. Our paid plans start at $49/month or
            $499/year.We also offer enterprise plans for others building on our
            technology.
          </Typography>
        </AccordionDetails>
      </Accordion>
      </div>
      <div className="accord">
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>What information do we provide?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Our technology reports come with metadata, including phone numbers,
            emails, IPs, DNS information, hostname, titles, and much more!
          </Typography>
        </AccordionDetails>
      </Accordion>
      </div>
      <div className="accord">
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>How do you collect your information?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Our server cluster crawls thousands of sources daily to find active
            domains. We then segment active domains using our repository of
            3000+ technology footprints. We also deploy our crawlers to enrich
            this segmented technographic data with additional metadata. All our
            lists are updated daily.
          </Typography>
        </AccordionDetails>
      </Accordion>
      </div>
      <div className="accord">
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
          <Typography>Can I upload domain lists?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Yes! All accounts come preloaded with credits to get segmentation
            and other data for your custom domain lists. We also baked in a
            "Deep Search" engine to obtain hard-to-find contact information from
            domains.
          </Typography>
        </AccordionDetails>
      </Accordion>
      </div>
    </div>
  );
}
