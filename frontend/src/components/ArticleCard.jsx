import { Card, CardContent, Typography } from "@mui/material";

const ArticleCard = ({title, excerpt}) => {
    return ( 
        <Card sx={{ mb: 2 }}>
            <CardContent>
                <Typography variant="h6">{title}</Typography>
                <Typography variant="body2" color="text.secondary">{excerpt}</Typography>
            </CardContent>
        </Card>
     );
}
 
export default ArticleCard;