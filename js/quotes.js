const quotes = [
  {
    quote: "우리가 이 땅에서 고양이한테 어떻게 대해주느냐에 따라 천국에서의 위치가 달라진다.",
    author: "로버트 A. 하인라인",
  },
  { quote: "고양이와 함께 하는 시간은 절대 낭비되는 시간이 아니다.", author: "콜렛" },
  { quote: "만약 고양이가 나무에서 떨어지면 집 안에 들어가서 웃으라.", author: "패트리샤 히치콕" },
  { quote: "고양이는 꼭 사진찍기 불가능할 때만 가장 기묘하고, 흥미롭고, 아름다운 포즈를 취한다. 그래서 고양이 달력에는 실망스럽게도 항상 대중용 포즈밖에 나와있지 않다. ", author: "J. R. 코울슨" },
  {
    quote: "고양이는 까다로운 동물이 아니다. 그냥 장미무늬 접시에다 우유를 주고 파란 접시에다 생선을 주기만 하면 된다. 그러면 고양이는 음식을 물고 바닥에서 먹을 것이다.",
    author: "아더 브리지스이솝",
  },
  { quote: "고양이들과 함께 침대 위에서 잘 때 힘든 점은 고양이가 사람 옆에서 자려하지않고 사람 위에서 자려하려는 것이다.", author: "팸 브라운" },
  {
    quote: "고양이를 모르는 사람들이 보기에는 모든 고양이들이 비슷한 존재이다. 하지만 고양이 애호가들이 보기에는 모든 고양이들이 놀라울 정도로 완전히 다른 각자의 개성을 가지고 있다.",
    author: "제니 드 브라이즈",
  },
  { quote: "모든 고양이들은 자기에게 관심이 집중되는 것을 좋아한다.", author: "피터 그레이" },
  { quote: "사람들은 처음 만나는 사람을 만났을때 서로가 고양이를 키운다는 사실을 알게 되면 갑자기 긴장을 풀게된다. 그리고 서로 고양이에 대한 일화를 쏟아내기 시작한다.", author: "샬롯 그레이" },
  { quote: "개는 당신에게 아부할 것이다. 하지만 당신은 고양이에게 아부해야한다.", author: "조지 마이크스" },
  { quote: "고양이는 세상 모두가 자기를 사랑해주길 원하지 않는다. 다만 자기가 선택한 사람이 자기를 사랑해주길 바랄 뿐이다.", author: "헬렌 톰슨" },
  { quote: "당신이 많은 사랑을 베풀어 준다면 고양이는 당신의 친구가 되어 줄것이다. 하지만 절대 당신의 종이 되지는 않는다.", author: "고티에" },
  { quote: "고양이는 세상의 모든것이 인간을 섬겨야 한다는 정설을 깨트리러 세상에 왔다.", author: "폴 그레이" },
  { quote: "시인들은 보통 고양이를 좋아한다. 왜냐하면 그들은 그들 자신이 남들보다 더 낫다는 착각을 하지 않기 때문이다.", author: "매리온 개러티" },
  { quote: "집고양이 라는 말에는 모순이 있다.", author: "조지 F. 윌" },
  { quote: "사람들은 고양이의 지능을 과소평가한다.", author: "루이스 웨인" },
  { quote: "아기 고양이만큼 겁 없는 탐험가는 이 세상에 없다.", author: "쥘 샹플뢰리" },
  { quote: "인간에게 필요한 것들 중 하나는 당신이 밤에 집으로 돌아오지 않을때 당신이 어디있는지를 알고 싶어하는 그 누군가이다.", author: "마가렛 미드" },
  { quote: "졸고 있는 작은 고양이의 모습을 보는 것은 더할 나위 없는 행복이다.", author: "샹플뢰리" },
  { quote: "고양이는 요가의 대가의 원조이다.", author: "패트리샤 커티스" },
  { quote: "고양이들은 그들이 안쪽에 있든 바깥쪽에 있든 닫힌 문을 싫어한다.", author: "릴리안 잭슨 브라운" },
  { quote: "하나님께서 태초에 인간을 창조하셨으나 인간이 너무나 힘없이 있기에 그에게 고양이를 주셨다.", author: "워렌 엑스타인" },
  { quote: "배고픈 고양이에게 절대 당신만을 좋아하냐고 묻지말라.", author: "루이스 J. 카무티" },
  { quote: "외로운 심정은 털과 털, 피부와 피부, 또는 털과 피부가 맞닿음으로써 위로된다.", author: "폴 갈리코" },
  { quote: "고양이는 한 사람을 자기가 감당하기 힘들 정도로 사랑한다. 하지만 그들은 너무나 지혜롭기 때문에 그것을 밖으로 완전히 드러내지 않는다.", author: "메리 E. 윌킨스 프리맨" },
];

const quote = document.querySelector("#quote p");
const author = document.querySelector("#quote span");

const randomQuotes = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = randomQuotes.quote;
author.innerText = randomQuotes.author;
