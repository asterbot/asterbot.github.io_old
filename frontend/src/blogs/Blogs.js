import React from "react";
import { Box } from '@mui/material';

import CommitGraph from "./CommitGraph";

const Blogs = () => {
  return (
          <div className="blogs"> 
            <div className="box-header">
                <Box component="section" alignItems="center" justifyContent="center" sx={{ margin: 'auto', p: 2, width:'50%' }}>
                    <h2><span>Blogs</span></h2><br /> 
                </Box> 
            </div>

            <CommitGraph />

          </div>
   );
}
 
export default Blogs;