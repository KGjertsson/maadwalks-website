import React from 'react';
import { Grid, Paper } from '@material-ui/core';

const paperXs = 12;
const paperSm = 8;
const paperMd = 6;
const paperLg = 5;
const paperXl = 4;

export default function DataPolicyView() {
  return (
    <Grid container direction='column' justify='center' alignItems='center'>
      <Grid
        item
        xs={paperXs}
        sm={paperSm}
        md={paperMd}
        lg={paperLg}
        xl={paperXl}
        style={{ margin: '10px' }}
      >
        <Paper>
          <h1>1. About Us</h1>
          <span>
            We are Maadwalk Games Inc. This Policy applies to websites operated
            by us as well as the game itself. We are the controller of the
            personal information collected. If you have any questions or want to
            know more about how we use your personal information, please contact
            us as stated in section 6. We promise to keep your data safe and to
            not to sell your data to third parties. We promise to give you the
            right to access and delete your data.
          </span>
        </Paper>
      </Grid>
      <Grid
        item
        xs={paperXs}
        sm={paperSm}
        md={paperMd}
        lg={paperLg}
        xl={paperXl}
        style={{ margin: '10px' }}
      >
        <Paper>
          <h1>2. What is defined as personal information?</h1>
          <span>
            Personal information can be any information relating to an
            identified or identifiable natural person. In other words, it can be
            any information that could allow us to identify you both directly
            and indirectly (like for example your name, email address, IP
            address, or your billing address). In this Policy, we will use the
            word “data” to refer to personal information.
          </span>
        </Paper>
      </Grid>
      <Grid
        item
        xs={paperXs}
        sm={paperSm}
        md={paperMd}
        lg={paperLg}
        xl={paperXl}
        style={{ margin: '10px' }}
      >
        <Paper>
          <h1>3. When do we collect data?</h1>
          <span>
            We will collect data about you when you use our Services, including
            in the following situations:
          </span>
          <ul>
            <li>When you play our games</li>
            <li>When you contact us via emails or letters</li>
          </ul>
        </Paper>
      </Grid>
      <Grid
        item
        xs={paperXs}
        sm={paperSm}
        md={paperMd}
        lg={paperLg}
        xl={paperXl}
        style={{ margin: '10px' }}
      >
        <Paper>
          <h1>4. What data do we collect?</h1>
          <span>
            We use data that you have explicitly provided to us in different
            situations. We also use personal information that is generated by
            your device or when you use our Services. These categories are
            further explained below.
          </span>
          <br />
          <span>Data that you explicitly provide us with:</span>
          <ul>
            <li>Username</li>
            <li>Time and location of last account login</li>
            <li>Total sessions and time spent playing the game</li>
          </ul>
          <br />
          <span>
            The above information is provided to us when creating or accessing
            an account in our game. You have a right to withdraw your consent at
            any time as described under section 6 below. We may receive data
            about you from third parties or partners. We use the following
            third-party services:
          </span>
          <ul>
            <li>Unity Analytics (All platforms)</li>
            <li>GameSparks (All platforms)</li>
          </ul>
        </Paper>
      </Grid>
      <Grid
        item
        xs={paperXs}
        sm={paperSm}
        md={paperMd}
        lg={paperLg}
        xl={paperXl}
        style={{ margin: '10px' }}
      >
        <Paper>
          <h1>5. How do we use the data?</h1>
          <span>
            We may use the data we collect from you and from your use of our
            Services, to provide, maintain, protect and improve the Services and
            to develop new ones. We will not use your data for any other purpose
            than the purpose for which the data is originally collected. To
            operate our business and to enhance your gaming experience, we use
            your information in the following ways:
          </span>
          <ul>
            <li>To respond to inquiries or comments from you</li>
            <li>
              To verify your identity in order to prevent unauthorized access
            </li>
            <li>To provide you with software updates</li>
            <li>To understand trends in usage</li>
            <li>
              To calculate marketing conversion rates and other elements of
              advertising performance
            </li>
            <li>
              To help tracking and correcting errors and bugs in games and
              services
            </li>
            <li>To customize your user experience</li>
            <li>To maintain or administer your in-game account</li>
            <li>
              To keep our Services fair, investigate and prevent fraud and
              illegal behaviour
            </li>
          </ul>
        </Paper>
      </Grid>
      <Grid
        item
        xs={paperXs}
        sm={paperSm}
        md={paperMd}
        lg={paperLg}
        xl={paperXl}
        style={{ margin: '10px' }}
      >
        <Paper>
          <h1>6. How to access collected data or close your account</h1>
          <span>
            You can withdraw your consent to our data collection, this will
            however unfortunately result in us removing your account along with
            all the personal data collected. All in-game purchases will thus be
            removed and unrecoverable, effective immediately. To close your
            account, access your data or if you have any questions, please send
            us an email at maadwalk@gmail.com. If the contact concerns data
            collection, please include your account name and specify your
            request.
          </span>
        </Paper>
      </Grid>
    </Grid>
  );
}
