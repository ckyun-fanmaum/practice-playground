# Prisma 실습

## 실습환경 구축

### nvm

#### 설치

```zsh
brew install nvm
```

#### 환경변수 설정

```zsh
# ~/.zshrc 가 없는 경우
touch ~/.zshrc

# ~/.nvm/ 이 없는 경우
mkdir ~/.nvm

# ~/.zshrc 에 추가
export NVM_DIR="$HOME/.nvm"                
  [ -s "/opt/homebrew/opt/nvm/nvm.sh" ] && \. "/opt/homebrew/opt/nvm/nvm.sh"
  [ -s "/opt/homebrew/opt/nvm/etc/bash_completion.d/nvm" ] && \. "/opt/homebrew/opt/nvm/etc/bash_completion.d/nvm"

# 반영 및 확인
source ~/.zshrc
nvm -v
```

### node

#### 설치

```zsh
nvm install 22
```

## Quick Start

[docs](https://www.prisma.io/docs/prisma-postgres/quickstart/prisma-orm)