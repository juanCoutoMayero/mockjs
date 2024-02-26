const http = require('http');
const PORT = 3000;

const router = express();

const server = http.createServer(router);

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.use('/', routes);

router.use('/auth/login', async (req, res, next),() => {
  authController(req, res, next);
});

router.post('/auth/login', validationRequest(IRequestAuthLogin), async (req, res), async () => {
  const request = req.body;
  res.status(response.status).json({auth_token: 'asfnaskdjnzfskdzf'});
});


server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
