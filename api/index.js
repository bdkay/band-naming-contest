import express from 'express';
import data from '../src/testData';

const router = express.Router();
const contests = data.contests.reduce((obj, contest) => {
  obj[contest.id] = contest;
  return obj;
}, {});

// PRE MONGO DB ROUTES

router.get('/contests', (req, res) => {
  res.send({
    contests: contests
  });
});

router.get('/contests/:contestId', (req, res) => {
  let contest = contests[req.params.contestId];
  contest.description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed ante malesuada, commodo elit sodales, rhoncus tortor. Fusce non elementum magna. Sed sollicitudin vitae dui vitae luctus. In pharetra, erat convallis fermentum consequat, leo neque vulputate dolor, vitae tincidunt quam sapien dignissim ipsum. Suspendisse aliquet scelerisque nunc ut accumsan. Donec id laoreet arcu. Cras id justo neque. Cras faucibus, lacus at tincidunt blandit, lorem enim hendrerit nisl, rutrum scelerisque enim purus a urna. Pellentesque consectetur turpis a semper accumsan. Donec consequat ullamcorper diam eu venenatis. Aliquam accumsan orci elementum, cursus elit ac, viverra mauris. In vel velit eget sem laoreet sagittis. Nam aliquam dapibus enim, in volutpat lorem facilisis ac. Etiam a leo eu diam accumsan venenatis. Nam tincidunt arcu ac metus auctor ultricies. Pellentesque placerat diam vitae nisi eleifend efficitur.';

  res.send(contest);
});

export default router;
