import logo from './logo.svg';
// import './App.css';
import './footer.css'

function Footer() {
  return (
    <div className='footer'>
       <div style={{width: '33%', padding: '20px'}}>
       “Tell me and I forget. Teach me and I
remember. Involve me and I learn.”
       </div>
       <div>
         <ul style={{listStyleType: 'none', padding: '10px'}}>
           <li style={{fontWeight: 'bold', padding: '10px'}}>Learn</li>
           <li>Explore Classes</li>
           <li>Learner Allowance</li>
           <li>Outschool for Employers</li>
           <li>Financial Assistance</li>
           <li>Schools and Districts</li>
           <li>Give a Gift Card</li>
</ul>
       </div>
       <div>
        <ul style={{listStyleType: 'none'}}>
          <li style={{fontWeight: 'bold'}}>Teach</li>
          <li>Independent Teachers</li>
          <li>Organizations</li>
        </ul>
       </div>
       <div>
         <ul style={{listStyleType: 'none'}}>
           <li style={{fontWeight: 'bold'}}>About</li>
           <li>Company</li>
           <li>Careers</li>
           <li>Blog</li>
           <li>Press</li>
         </ul>
       </div>
     <div>
       <ul style={{listStyleType: 'none'}}>
         <li style={{fontWeight: 'bold'}}>Support</li>
         <li>Help</li>
         <li>Safety</li>
         <li>Privacy</li>
         <li>Learner Privacy</li>
         <li>Terms</li>
       </ul>
     </div>
    </div>
  );
}

export default Footer;
