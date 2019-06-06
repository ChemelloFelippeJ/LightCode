#!/bin/bash
#
# Script to update git repositories

bold="\033[01m"
normal="\033[0m"
shell="ls --ignore=$BASH_SOURCE"

echo -e "Updating LightCode repository"
git pull
echo -e ""
for dir in `ls --ignore=$BASH_SOURCE`
do
	if [ -d $dir/.git ]; then
		cd $dir
		echo -e "Checking update to $bold$dir$normal"
		git pull
		echo -e "$bold$dir$normal is ok!\n"
		cd ../
	fi
done;